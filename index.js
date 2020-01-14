'use strict';

// [START functions_helloworld_http]
const escapeHtml = require('escape-html');
const textToSpeech = require('@google-cloud/text-to-speech');

exports.textToSpeech = async (req, res) => {
  const text = 'Pronunciation';
  const options = {timeout: 10000};
  const client = new textToSpeech.TextToSpeechClient(options);

  const request = {
    input: {text: text},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    // Select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  const [response] = await client.synthesizeSpeech(request);

  res.status(200).send(response.audioContent);
};
