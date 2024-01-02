import jsPDF from 'jspdf';
import 'jspdf-autotable';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

export const generatePDFBlob = async (submitedData: any) => {
  try {
    const pdf = new jsPDF();
    (pdf as any).previousAutoTable = { finalY: 10 };

    const yesImage = '/icons/other/yesMark.png';
    const img = new Image();
    img.src = yesImage;

    await new Promise((resolve) => {
      img.onload = resolve;
    });



    const imgData = '/icons/logo/pdf-logo.png';
    pdf.addImage(imgData, 'PNG', 60, 20, 75, 15);

    pdf.setFontSize(16);
    pdf.text('FATCA form for Individuals Section', 10, 60);

    pdf.setFontSize(12);
    pdf.text('"A" FUll Name as per Passport', 10, 70);

    pdf.setFontSize(12);
    pdf.text('Account No: 22343', 10, 80);

    pdf.setFontSize(12);
    pdf.text('CIF No: 22343', 160, 80);

    pdf.setFontSize(12);
    pdf.text('Please respond to the following questions to determine "U.S. Indicia"', 10, 90);



    const columns1 = ['#', 'Question', 'Answer   '];
    const rows1 = [
      ['a', 'Are you a U.S National?', `    ${submitedData?.us_national}`],
      ['b', 'Are you a U.S Resident (Green Card Hoker)', `    ${submitedData?.us_resident}`],
      ['c', 'Were you born in the U.S?', `    ${submitedData?.us_born}`],
      ['d', 'Do you have a US maling address (including a U.S, post office box)?', `    ${submitedData?.us_mailing}`],
      ['e', 'Do you have a U.S telephone number ?', `    ${submitedData?.us_tell_number}`],
      ['f', 'Do you have any standing instructions to transfer funds to an account maintaned in the U.S ?', `    ${submitedData?.us_standing_instructions}`],
      ['g', 'Have you appointed a Power of Attorney with a U.S mailing adress for No this account ?', `    ${submitedData?.us_attorney}`],
      ['h', 'Have you provided an "in care of" or "hold mail" address on this account while you reside/are domiciled in the US.? To clarify hold mail is a service offered by some Banks to persons not wanting maid to be delivered to their Registered mailing adress, where tje bank holsds the mail for collection', `    ${submitedData?.us_incare_mail}`],
    ];

    autoTable(pdf, {
      head: [columns1],
      body: rows1,
      startY: 100
    });

    const maxWidth = 170;

    pdf.setFontSize(12);
    pdf.text('If you have answered "Yes" to any of the above questions, please complete the requested', 10, 220);
    pdf.setFontSize(12);
    pdf.text('additional details on Section B', 10, 226);

    pdf.setFontSize(12);
    pdf.text('I, acknowledge and declare under the penalties of perjury that the information provided on Form A and Form B (where applicable) is correct and true and complete to the best of my knowledge and belief. l agree to provide under the penalties of perjury supporting evidence and provide updates in case any of the aforementioned information changes. Incase Dabari invest has any reason to believe that the disclosed informations is incorrect, the bank reserves the right to take subtable action against me.', 10, 234, { maxWidth });

    pdf.insertPage(2)


    pdf.setFontSize(12);
    pdf.text('By signing below, the Client confirm and agrees that (notwithstanding any other provision in the Terms and Conditions):', 10, 20, { maxWidth });


    pdf.setFontSize(12);
    pdf.text('1. The Gent wil provide adational information or documents that the Bankneeds from the Ghent and that the Chent waves any cenfidentialturights abolicable under data crotectin bankino secrecu or soniar aas n resoect of alliniormation the bank holds or obtains from the chent which the Bank needs to disclose to comply with is obligations.', 10, 36, { maxWidth });

    pdf.setFontSize(12);
    pdf.text(`2. The Client permits disclosure of such information to the tax authorities referred to above and to the tax authority's agents or sub-contractors engaged for the purpose of centralzing the processing of Client information in another country`, 10, 62, { maxWidth });



    pdf.setFontSize(12);
    pdf.text(`3. if the Client does not provide the Bank with information or documents the Bank needs, the Bank may withhold a proportion of the available balance, including profit or internet, paid to the client as required by any tax authority, close the account and/ or terminate the banking facilities of a the Client or transfer the account and/ or banking facilities to an affiliate of the bank.`, 10, 82, { maxWidth });

    pdf.setFontSize(12);
    pdf.text(`4. if the client asks the Bank to make a payment to an account based at a financial institution which does not participate or comply with the relevant tax legislation, the Bank maybe required, and the Client authorizes the Bank, to withhold certain amounts from the paiement and the Bank will inform the cliente if this the case.`, 10, 112, { maxWidth });

    pdf.setFontSize(12);
    pdf.text(`5. The bank may transfer the client's data to another country or countries for processing by and on behalf of the bank and use agents sub-contractors to process the client's data to comply with the Bank's obligations.`, 10, 138, { maxWidth });

    pdf.setFontSize(12);
    pdf.text(`6. The Bank will not be liable to the Client for any loss the Client may suffer as a result of complying with legislation or agreements with tax authorities in accordance with this provision unless that loss is caused by the Banks gross negligence willful default or fraud as may be finally judicially determined`, 10, 160, { maxWidth });

    pdf.setFontSize(12);
    pdf.text(`7. The client will indemnify the bank against any all loss or damages incurred as a result of the client's breach or non-compliance with these terms and conditions or any representation by the client of information provided to the bank and`, 10, 190, { maxWidth });

    pdf.setFontSize(12);
    pdf.text(`8. The Client's consent on the above mentioned arrangements will override any contradictory terms or consent provided by the client under any other agreement with the bank, whether before or after the date of signing these Terms and Conditions, not wit standing any clause governing the variation of an earlier agreement with the bank.`, 10, 210, { maxWidth });


    pdf.insertPage(3)



    pdf.setFontSize(12);
    pdf.text(`A) Form for individuals - Section «B» If you have answered Yes to any of the questions in Section A Please override further details 
`, 10, 30, { maxWidth });

    const rows2 = [
      [
        `U.S Nationals:
${submitedData?.us_nationals}`,
        `Passport No:
${submitedData?.us_passport_no}`,
        `Phone No:
${submitedData?.us_phone_no}`],
      [`econd country of dual nationality: 
${submitedData?.us_second_country}`,
      `Passport No:
${submitedData?.us_second_country_passport_no}`,
      `Phone No: 
${submitedData?.us_second_country_phone_no}`],
    ];

    const startX = 10;
    const startY = 32;
    const columnWidths = [60, 60, 60];
    const rowHeight = 10;


    pdf.setDrawColor(0);

    for (let i = 0; i < rows2.length; i++) {
      const row = rows2[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX + columnWidths.slice(0, j).reduce((acc, width) => acc + width, 0), startY + (i + 1) * rowHeight, columnWidths[j], rowHeight);
        pdf.text(row[j], startX + columnWidths.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY + (i + 1) * rowHeight + 4);
      }
    }




    pdf.setFontSize(12);
    pdf.text(`B) For individual U.S. tax payers, please provide your Tax Identification Number (TIN) or Social Security (SS) Number:
`, 10, 75, { maxWidth });

    const rows3 = [
      [
        `TIN/SS No: ${submitedData?.us_tin_ss_no}`
      ]]

    const startX3 = 10;
    const startY3 = 77;
    const columnWidths3 = [180];
    const rowHeight3 = 10;


    pdf.setDrawColor(0);

    for (let i = 0; i < rows3.length; i++) {
      const row = rows3[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX3 + columnWidths3.slice(0, j).reduce((acc, width) => acc + width, 0), startY3 + (i + 1) * rowHeight3, columnWidths3[j], rowHeight3);
        pdf.text(row[j], startX3 + columnWidths3.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY3 + (i + 1) * rowHeight3 + 6);
      }
    }


    pdf.setFontSize(12);
    pdf.text(`C) For Green Card Holders, please orovide vour Green Card Number
`, 10, 110, { maxWidth });

    const rows4 = [
      [
        `GC No: ${submitedData?.us_gc_no}`
      ]]

    const startX4 = 10;
    const startY4 = 105;
    const columnWidths4 = [180];
    const rowHeight4 = 10;


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows4.length; i++) {
      const row = rows4[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX4 + columnWidths4.slice(0, j).reduce((acc, width) => acc + width, 0), startY4 + (i + 1) * rowHeight4, columnWidths4[j], rowHeight4);
        pdf.text(row[j], startX4 + columnWidths4.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY4 + (i + 1) * rowHeight4 + 6);
      }
    }



    pdf.setFontSize(12);
    pdf.text(`D) For those with a U.S. address, please provide complete U.S. mailing address including P.O. Box No.
`, 10, 140, { maxWidth });

    const rows5 = [
      [
        `Address Line 1: ${submitedData?.us_address_line_1}`]
    ];

    const startX5 = 10;
    const startY5 = 141;
    const columnWidths5 = [180];
    const rowHeight5 = 10;


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows5.length; i++) {
      const row = rows5[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX5 + columnWidths5.slice(0, j).reduce((acc, width) => acc + width, 0), startY5 + (i + 1) * rowHeight5, columnWidths5[j], rowHeight5);
        pdf.text(row[j], startX5 + columnWidths5.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY5 + (i + 1) * rowHeight5 + 6);
      }
    }


    const rows6 = [
      [
        `Address Line 2: ${submitedData?.us_address_line_2}`]
    ];

    const startY6 = 151;


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows6.length; i++) {
      const row = rows6[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX5 + columnWidths5.slice(0, j).reduce((acc, width) => acc + width, 0), startY6 + (i + 1) * rowHeight5, columnWidths5[j], rowHeight5);
        pdf.text(row[j], startX5 + columnWidths5.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY6 + (i + 1) * rowHeight5 + 6);
      }
    }

    const rows7 = [
      [
        `P.O Box No:
${submitedData?.us_post_box_no}`,
        `City:
${submitedData?.us_city}`,
        `Country:
${submitedData?.us_country}`,]
    ];

    const startY7 = 161;
    const columnWidths7 = [60, 60, 60];


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows7.length; i++) {
      const row = rows7[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX5 + columnWidths7.slice(0, j).reduce((acc, width) => acc + width, 0), startY7 + (i + 1) * rowHeight5, columnWidths7[j], rowHeight5);
        pdf.text(row[j], startX5 + columnWidths7.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY7 + (i + 1) * rowHeight5 + 4);
      }
    }



    pdf.setFontSize(12);
    pdf.text(`E) For those born in the US. please override coo of vour Birth Certificate. If you have renounced your US citizenshin. blease provide evidence of this (renunciation craniate or eauivalent)
`, 10, 195, { maxWidth });


    pdf.setFontSize(12);
    pdf.text(`F) Please provide U.S telephone number with Country and Area Code
`, 10, 215, { maxWidth });

    const rows8 = [
      [
        `Tell: ${submitedData?.us_tell_country}`]
    ];

    const startY8 = 212;


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows8.length; i++) {
      const row = rows8[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX5 + columnWidths5.slice(0, j).reduce((acc, width) => acc + width, 0), startY8 + (i + 1) * rowHeight5, columnWidths5[j], rowHeight5);
        pdf.text(row[j], startX5 + columnWidths5.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY8 + (i + 1) * rowHeight5 + 6);
      }
    }

    pdf.insertPage(4)

    pdf.setFontSize(12);
    pdf.text(`G) For those with Standing Instructions to make fixed frequency transfers to the U.S., please provide the following details
`, 10, 32, { maxWidth });

    const rows9 = [
      [
        `U.S Nationals:
${submitedData?.us_transfer_address_line_1}`,
        `Amount (USD):
${submitedData?.us_transfer_amount}`],
      [`Address Line 2: 
${submitedData?.us_transfer_address_line_2}`,
      `U.S Account No:
${submitedData?.us_transfer_amount_us_account_no}`],
    ];

    const startY9 = 34;
    const columnWidths9 = [90, 90];


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows9.length; i++) {
      const row = rows9[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX5 + columnWidths9.slice(0, j).reduce((acc, width) => acc + width, 0), startY9 + (i + 1) * rowHeight5, columnWidths9[j], rowHeight5);
        pdf.text(row[j], startX5 + columnWidths9.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY9 + (i + 1) * rowHeight5 + 4);
      }
    }


    pdf.setFontSize(12);
    pdf.text(`H) Does the POA holder have a U.S. mailing address?
`, 10, 75, { maxWidth });

    const rows10 = [
      [
        `Name:
${submitedData?.us_poa_holder_name}`,
        `Nationality:
${submitedData?.us_poa_nationality}`,
      ]]

    const startY10 = 70
    const columnWidths10 = [90, 90];


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows10.length; i++) {
      const row = rows10[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX3 + columnWidths10.slice(0, j).reduce((acc, width) => acc + width, 0), startY10 + (i + 1) * rowHeight3, columnWidths10[j], rowHeight3);
        pdf.text(row[j], startX3 + columnWidths10.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY10 + (i + 1) * rowHeight3 + 4);
      }
    }


    const rows11 = [
      [
        `Address Line 1: ${submitedData?.us_poa_address_line_1}`,
      ]]

    const startY11 = 80
    const columnWidths11 = [180];


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows11.length; i++) {
      const row = rows11[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX3 + columnWidths11.slice(0, j).reduce((acc, width) => acc + width, 0), startY11 + (i + 1) * rowHeight3, columnWidths11[j], rowHeight3);
        pdf.text(row[j], startX3 + columnWidths11.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY11 + (i + 1) * rowHeight3 + 6);
      }
    }


    const rows12 = [
      [
        `Address Line 2: ${submitedData?.us_poa_address_line_2}`,
      ]]

    const startY12 = 90


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows12.length; i++) {
      const row = rows12[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX3 + columnWidths11.slice(0, j).reduce((acc, width) => acc + width, 0), startY12 + (i + 1) * rowHeight3, columnWidths11[j], rowHeight3);
        pdf.text(row[j], startX3 + columnWidths11.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY12 + (i + 1) * rowHeight3 + 6);
      }
    }


    const rows13 = [
      [
        `City:
${submitedData?.us_poa_city}`,
        `Country:
${submitedData?.us_poa_country}`,
      ]]

    const startY13 = 100


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows13.length; i++) {
      const row = rows13[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX3 + columnWidths10.slice(0, j).reduce((acc, width) => acc + width, 0), startY13 + (i + 1) * rowHeight3, columnWidths10[j], rowHeight3);
        pdf.text(row[j], startX3 + columnWidths10.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY13 + (i + 1) * rowHeight3 + 4);
      }
    }


    pdf.setFontSize(12);
    pdf.text(`J) For U.S. property owners, please provide details address of U.S. property owned:
`, 10, 130, { maxWidth });

    const rows14 = [
      [
        `Address 1:
${submitedData?.us_property_owner_address_line_1}`,
        `Address 2:
${submitedData?.us_property_owner_address_line_2}`,
      ]]

    const startY14 = 125


    pdf.setDrawColor(0); // Set border color to black

    for (let i = 0; i < rows14.length; i++) {
      const row = rows14[i];
      for (let j = 0; j < row.length; j++) {
        pdf.setFontSize(8);
        pdf.rect(startX3 + columnWidths10.slice(0, j).reduce((acc, width) => acc + width, 0), startY14 + (i + 1) * rowHeight3, columnWidths10[j], rowHeight3);
        pdf.text(row[j], startX3 + columnWidths10.slice(0, j).reduce((acc, width) => acc + width, 0) + 2, startY14 + (i + 1) * rowHeight3 + 4);
      }
    }




    const pdfBlob = pdf.output('blob');
    return pdfBlob;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};


