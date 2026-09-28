document.addEventListener('DOMContentLoaded', () => {
  const prices = {
    B000P3WS02: '$28.69', B075M9QV8P: '$129.99', B07D9FTC77: '$33.99',
    B07S4HDGK9: '$19.97', B07T9HC65T: '$18.99', B01HTG4WHY: '$24.99',
    B086Z2Y1D6: '$9.99', B088P9H3V7: '$13.64', B08BPHCXR3: '$16.99',
    B08FCL69QZ: '$8.49', B08G8CQBL8: '$25.99', B08H8DR7ZW: '$9.99',
    B08HRMFBPR: '$6.56', B091YFR9MD: '$8.90', B096Y8J2H7: '$11.59',
    B0852VG8WQ: '$14.98',
    B09HWSFRP1: '$8.18', B09K3VB4NX: '$6.69', B09MKL2LCX: '$79.99',
    B09VSF5TV2: '$14.98', B0B84QC79K: '$9.99', B0BJ6NXWYN: '$11.99',
    B07PS8T2KM: '$8.99', B0DMVFC2BV: '$21.99',
    B095B9C15R: '$64.95', B0BMLMBJKK: '$9.99', B0BRGZB83C: '$14.39', B0BYHKXGPC: '$13.99',
    B0CLR2LQMW: '$81.99', B0CTGZ1QGK: '$8.58', B0D9Y5XFQC: '$9.99',
    B07HCNTZ2Z: '$9.99', B0DK1SCV46: '$16.98', B0DYDT1KTW: '$8.99', B0DYJGNSMX: '$21.99',
    B0F4L5FYQ2: '$14.99', B0FB3FX5KH: '$75.99', B0FDJYRGB7: '$6.98',
    B0G6LKP541: '$16.99'
  };

  document.querySelectorAll('.supply-row[href*="/dp/"]').forEach((row) => {
    const match = row.href.match(/\/dp\/([A-Z0-9]{10})/i);
    const price = match && prices[match[1].toUpperCase()];
    if (!price) return;

    const priceLabel = document.createElement('span');
    priceLabel.className = 'supply-price';
    priceLabel.textContent = price;
    row.querySelector('strong')?.append(' ', priceLabel);
  });

  document.querySelectorAll('.supply-group').forEach((group) => {
    const total = Array.from(group.querySelectorAll('.supply-row')).reduce((sum, row) => {
      const match = row.href.match(/\/dp\/([A-Z0-9]{10})/i);
      const price = row.dataset.price || (match && prices[match[1].toUpperCase()]);
      return sum + (price ? Number(price.replace('$', '')) : 0);
    }, 0);

    const totalLabel = document.createElement('p');
    totalLabel.className = 'supply-total';
    totalLabel.textContent = `Section total: $${total.toFixed(2)}`;
    group.querySelector('h3')?.after(totalLabel);
  });
});
