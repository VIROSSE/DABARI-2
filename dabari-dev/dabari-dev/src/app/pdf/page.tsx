import React from 'react';
import NewPDF from '../components/testPdf';
import { cookies } from 'next/headers';

const PDFPage = () => {
    const cookieStore = cookies();
    const token = cookieStore.get("pbsession") ?? '';

    return <NewPDF token={token} />
};

export default PDFPage;