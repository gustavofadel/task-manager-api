export async function jsonConfig(req, res) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(chunks).toString());
  } catch {
    req.body = null;
  }

  return res.setHeader("Content-Type", "application/json");
}
