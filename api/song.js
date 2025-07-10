export default function handler(req, res) {
  const user = req.query.user || "Someone";
  const song = req.query.song || "a song";
  const position = req.query.position || "somewhere";

  const message = `${user} added the ${song}. Your request is number ${position} in the queue. Thanks for keeping the vibe going! 🔥`;

  res.status(200).send(message);
}
