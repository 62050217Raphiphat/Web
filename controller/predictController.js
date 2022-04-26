const predictModel = require("../model/predictModel");

class predictController {
  async predict(mv, liveStream, musicGenre, podCast,playlist, platform) {
    //Call Predict Function from Model
    const { message,answer, error } = await new predictModel().predict(
      mv,
      liveStream,
      musicGenre,
      podCast,
      playlist,
      platform
    );

    return { message: message, answer:answer,error: error };
  }
}

module.exports = predictController;
