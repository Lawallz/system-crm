export const matches=(values,query)=>values.filter(Boolean).join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim());
export function isValidBackup(d){
 if(!d||!Array.isArray(d.clients)||!Array.isArray(d.deals)||!Array.isArray(d.activities))return false;
 const text=x=>typeof x==='string';
 const unique=arr=>arr.every(x=>x&&text(x.id)&&x.id.length>0)&&new Set(arr.map(x=>x.id)).size===arr.length;
 if(![d.clients,d.deals,d.activities].every(unique))return false;
 if(!d.clients.every(c=>[c.name,c.company,c.email,c.phone].every(text)&&c.name.trim()&&c.company.trim()))return false;
 const ids=new Set(d.clients.map(c=>c.id));
 if(!d.deals.every(x=>ids.has(x.clientId)&&text(x.title)&&x.title.trim()&&typeof x.value==='number'&&Number.isFinite(x.value)&&x.value>0&&Number.isInteger(x.stage)&&x.stage>=0&&x.stage<=4))return false;
 return d.activities.every(x=>ids.has(x.clientId)&&text(x.note)&&text(x.type)&&text(x.date)&&!Number.isNaN(Date.parse(x.date))&&text(x.next)&&(!x.next||(/^\d{4}-\d{2}-\d{2}$/.test(x.next)&&!Number.isNaN(Date.parse(x.next)))));
}
