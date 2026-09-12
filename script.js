const SUPABASE_URL = 'https://fjvrwbqoxmcdkvcciwal.supabase.co';
const SUPABASE_KEY = 'sb_publishable_q6vkNsHyMqU0uXfDSisV4g_6v_iGmWG';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quickQuote').addEventListener('submit',  async function(e) {
  e.preventDefault();
  const d = new FormData(this);
  const subject = encodeURIComponent('NEW MOVING QUOTE REQUEST - THE BEST MOVERS');
  const body = encodeURIComponent(
`NEW MOVING QUOTE REQUEST

CUSTOMER
Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email') || 'Not provided'}

MOVE DETAILS
Move Date: ${d.get('date') || 'Not selected'}
Move Type: ${d.get('moveType')}
Home Size: ${d.get('homeSize')}

PICKUP
Location: ${d.get('from')}
Access: ${d.get('pickupAccess')}

DESTINATION
Location: ${d.get('to')}
Access: ${d.get('destinationAccess')}

SPECIAL / HEAVY ITEMS
${d.get('specialItems') || 'None listed'}

ADDITIONAL DETAILS
${d.get('details') || 'None'}

Please contact me with pricing and availability.`
  );
 const dbQuote = {
  customer_name: d.get('name'),
  phone: d.get('phone'),
  email: d.get('email') || null,
  pickup_address: d.get('from'),
  dropoff_address: d.get('to'),
  move_date: d.get('date') || null,
  move_time: null,
  home_size: d.get('homeSize'),
  move_type: d.get('moveType'),
  notes: `Move Distance: ${d.get('moveDistance') || ''}
Pickup Access: ${d.get('pickupAccess') || ''}
Destination Access: ${d.get('destinationAccess') || ''}
Special Items: ${d.get('specialItems') || 'None'}
Details: ${d.get('details') || 'None'}`
};
  
  const { error } = await supabase.from('quotes').insert([dbQuote]);
  
  if (error) { alert(error.message); return; }
  window.location.href = `mailto:thebestmoversfl@gmail.com?subject=${subject}&body=${body}`;
});

console.log("THE BEST MOVERS TEST");
