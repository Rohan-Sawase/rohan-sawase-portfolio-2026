import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'POST') {
      // Increment visitor counter
      const { data: row } = await supabase
        .from('site_stats')
        .select('id, visitors')
        .eq('id', 1)
        .single();

      if (row) {
        const { error } = await supabase
          .from('site_stats')
          .update({ visitors: (row.visitors || 0) + 1 })
          .eq('id', 1);
        if (error) throw error;
      }
      return res.status(200).json({ ok: true });
    }

    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('site_stats')
        .select('visitors')
        .eq('id', 1)
        .single();
      if (error) throw error;
      return res.status(200).json({ visitors: data?.visitors || 0 });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Stats API error:', err);
    res.status(500).json({ error: err.message });
  }
}
