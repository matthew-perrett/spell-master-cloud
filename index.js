'use strict';

const textToSpeech = require('@google-cloud/text-to-speech');

exports.textToSpeech = async (req, res) => {
  const text = req.query.pronounce;
  const options = {timeout: 1000};
  const client = new textToSpeech.TextToSpeechClient(options);

  const request = {
    input: {text: text},
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    audioConfig: {audioEncoding: 'MP3'}
  };

  const [response] = await client.synthesizeSpeech(request);

  res.status(200).send(response.audioContent);
};

exports.test = (req, res) => {
  res.send(req.query);
};

