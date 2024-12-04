export const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(value)
    .replace("Rp", "RP");
};

export const orderOptions = [
  { label: "Terbaru", value: "" },
  { label: "Ulasan", value: "RATING" },
  { label: "Terlaris", value: "BEST_SELLER" },
  { label: "Harga Terendah", value: "CHEAPER_PRICE" },
];
