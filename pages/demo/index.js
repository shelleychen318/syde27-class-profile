import { google } from 'googleapis';

export const getStaticProps = async () => {

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});
    const sheets = google.sheets({ version: 'v4', auth });

    // How to read/query data (https://developers.google.com/sheets/api/samples/reading)
    const range = 'Demographics!A1:A77';

    const response = await sheets.spreadsheets.values.get({ spreadsheetId: process.env.SHEET_ID, range });
    const data = response.data.values

    return {
        props: {
            data
        }
    }
}

export default function demo({data}) {
    return (
        <>
            {data.map(content => (
                <h3>{content}</h3>
            ))}
        </>
    )
}