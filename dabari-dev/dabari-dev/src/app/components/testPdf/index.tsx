
"use client"



import axios from 'axios';
import { generatePDFBlob } from '../../../../utils/pdfUtils';


const NewPDF = ({ token }: { token: any }) => {
    const data = [{}]
    const handleDownload = async () => {
        try {
            const pdfBlob = await generatePDFBlob(data);

            // Create a FormData object to append the PDF file
            const formData = new FormData();
            formData.append('form', pdfBlob, 'document.pdf');
            formData.append('user_id', '82x4131jvd9mau2');

            // Submit the PDF to the API using Axios
            const response = await axios.post('https://dabari-back.cloud-station.app/api/collections/fatca/records', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token?.value}`
                },
            });

            // Handle the API response as needed
            console.log('API Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDownloadPDF = async () => {
        try {
            const pdfBlob = await generatePDFBlob(data);

            // Convert the Blob to a data URL
            const pdfDataUrl = URL.createObjectURL(pdfBlob);

            // Create a link element
            const link = document.createElement('a');
            link.href = pdfDataUrl;
            link.download = 'document.pdf';

            // Append the link to the document
            document.body.appendChild(link);

            // Trigger a click on the link to start the download
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Your Page</h1>
            <button onClick={handleDownload}>Submit PDF to API</button>

            <div>
                {/* Your other content */}
                <button onClick={handleDownloadPDF}>Download PDF</button>
            </div>
        </div>

    );
};

export default NewPDF;