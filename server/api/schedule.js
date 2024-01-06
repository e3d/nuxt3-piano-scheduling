export default async (req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
    });
    req.on('end', () => {
      const timeSlots = JSON.parse(data);
      const schedule = scheduleLessons(timeSlots);
      res.end(JSON.stringify(schedule));
    });
  }
};
