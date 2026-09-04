const galleryLightbox=document.querySelector('#gallery-lightbox');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{
  const image=galleryLightbox.querySelector('img');
  image.src=item.dataset.image;
  image.alt=item.querySelector('img').alt;
  galleryLightbox.querySelector('p').textContent=item.dataset.title;
  galleryLightbox.querySelector('span').textContent=item.dataset.category;
  galleryLightbox.showModal();
}));
galleryLightbox?.querySelector('.lightbox-close')?.addEventListener('click',()=>galleryLightbox.close());
galleryLightbox?.addEventListener('click',event=>{if(event.target===galleryLightbox)galleryLightbox.close()});
