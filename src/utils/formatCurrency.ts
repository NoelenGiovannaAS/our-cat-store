export function formatCurrency(
  value: number /*, locale: string, currency: 'BRL'*/,
) {
  const option: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'BRL',
  };

  const formatter = new Intl.NumberFormat('pt-BR', option); //Intl.NumberFormat('pt-BR', option );
  return formatter.format(value);
}
