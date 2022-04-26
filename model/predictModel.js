
class predictModel {
  async predict(mv, liveStream, musicGenre, podCast, playlist, platform) {
    try {
      if (mv == "No" && liveStream == "No" && musicGenre == "Both" && podCast == "No" && playlist == "No" && platform == "Computer /Notebook") {
        return { message: "Predict Complete", answer: "Youtube Music", error: false };

      }

      else if (mv == "No" && liveStream == "No" && musicGenre == "Both" && podCast == "No" && playlist == "No" && platform == "Mobile /Tablet") {
        return { message: "Predict Complete", answer: "Apple Music", error: false };
      }
      else if (mv == "No" && liveStream == "No" && musicGenre == "Both" && podCast == "No" && playlist == "Yes") {
        return { message: "Predict Complete", answer: "Spotify", error: false };
      }
      else if (mv == "No" && liveStream == "No" && musicGenre == "Both" && podCast == "No") {
        return { message: "Predict Complete", answer: "Spotify", error: false };
      }
      else if (mv == "No" && liveStream == "No" && musicGenre == "Inter" && podCast == "No") {
        return { message: "Predict Complete", answer: "Apple Music", error: false };
      }

      else if (mv == "No" && liveStream == "No" && musicGenre == "Inter" && podCast == "Yes") {
        return { message: "Predict Complete", answer: "Spotify", error: false };
      }

      else if (mv == "No" && liveStream == "No" && musicGenre == "Thai") {
        return { message: "Predict Complete", answer: "Joox Music", error: false };
      }

      else if (mv == "No" && liveStream == "Yes") {
        return { message: "Predict Complete", answer: "Joox Music", error: false };
      }
      else if (mv == "Yes") { 
        return {message: "Predict Complete",answer:"Youtube Music", error: false };
      }


    } catch (error) {
      return { message: "Error to predict", answer: "", error: true };
    }

  }
}

module.exports = predictModel;
