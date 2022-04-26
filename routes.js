const predictController = require("./controller/predictController");

module.exports = (app) => {
  //Set path for Upload File
  app.post("/predict", async (req, res) => {
    const mv = req.body.mv;
    const liveStream = req.body.liveStream;
    const musicGenre = req.body.musicGenre;
    const podCast = req.body.podCast;
    const playlist = req.body.playlist;
    const platform = req.body.platform;

    const { message,answer, error } = await new predictController().predict(
      mv,
      liveStream,
      musicGenre,
      podCast,
      playlist,
      platform
    );

    //Check Error from Call Predict Function and Return Value
    if (error) {
      res.status(400).json({message:message,answer:answer});
    } else {
      res.status(200).json({message:message,answer:answer});
    }
  });
};
