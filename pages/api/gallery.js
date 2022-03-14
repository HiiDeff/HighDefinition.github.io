import { google } from "googleapis";
import keys from "../../hdsheets.json";

export default function handler(req, res) {
    try {
        const client = new google.auth.JWT(
            keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            const optimages = {spreadsheetId: '10u3CjK2aUS_YIwbZkgP_tqpduxxg0A3QT9lfCw3lc4g', range: 'Sheet1!A1:A'};
            let images = await (await gsapi.spreadsheets.values.get(optimages)).data.values;

            let str = [];
            for (var i =  0; i < images.length; i++) {
                const img = 'https://drive.google.com/uc?export=view&id=' + images[i][0];
                str.push({
                    src: img,
                    height: 300,
                    width: 300,
                });
            }

            return res.status(400).json(JSON.stringify({error: false, str: str}));
        });
    } catch (e) {
        return res.status(400).json(JSON.stringify({error: true, message: e.message}));
    }
}