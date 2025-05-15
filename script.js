function copyToClipboard(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
        showToast(`${text} 복사 완료!`);
      })
      .catch(err => {
        console.error('복사 실패:', err);
      });
  }
  
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
  
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
  
    setTimeout(() => {
      toast.classList.remove('show');
      toast.addEventListener('transitionend', () => {
        toast.remove();
      });
    }, 2500);
  }
  