interface PopupProps {
  url: string;
  title: string;
  width?: number;
  height?: number;
}

export function openPopup({
  url,
  title,
  width = 600,
  height = 400
}: PopupProps) {
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  window.open(
    url,
    title,
    `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars,status`
  );
}
