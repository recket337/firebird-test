export const getHighlightedText = (text: string, highlight: string) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part) => {
    return part.toLowerCase() === highlight.toLowerCase() ? (
      <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
    ) : (
      part
    );
  });
};

export const getListItemText = (value: string, search: string) => {
  if (!search) return value;

  return getHighlightedText(value, search);
};
