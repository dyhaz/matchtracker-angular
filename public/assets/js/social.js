function twitterShare(title) {
  window.location.href = 'https://twitter.com/intent/tweet?text=' +  title + '&url=' + window.location.href;
}

function fbShare(title) {
  window.location.href = 'http://www.facebook.com/sharer.php?title=' + title + '&u=' + window.location.href;
}


function copyLink()
{

  const dummy = document.createElement('input'),
    text = window.location.href;
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}
