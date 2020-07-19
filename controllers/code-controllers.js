const axios = require("axios");
// import AWS from "aws-sdk";

// const lambda = new AWS.Lambda({
//   region: "us-east-2",
//   accessKeyId: "AKIARLMSKTY2V6DMNNOM",
//   secretAccessKey: "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",
// });

const testURL = (req, res, next) => {
  res.json({ message: "working fine" });
};

const getSort = (req, res, next) => {
  const sortingAlgorithm = req.params.id;
  axios
    .get(
      `https://seegall-d5efa.firebaseio.com/commands/-MC1Guqts1tZuNyRlv9w/${sortingAlgorithm}.json`
    )
    .then((response) => {
      console.log(response.data);
      return res.json({ code: response.data });
    })
    .catch((error) => {
      return res.json({ error: error.message });
    });
};

const postCode = (req, res, next) => {
  let postBody = JSON.stringify({
    code: req.body.code,
  });
  console.log(postBody);
  axios
    .post(
      "https://pzcs0hve22.execute-api.ap-southeast-1.amazonaws.com/prod/code",
      postBody
    )
    .then((response) => {
      res.json({ commands: response.data.commands });
    })
    .catch((err) => res.json({ error: err.message }));
};

exports.postCode = postCode;
exports.testURL = testURL;
exports.getSort = getSort;
