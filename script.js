const panier = [];
function ajouterAuPanier(produit) {
  panier.push(produit);
  afficherPanier();
}
function afficherPanier() {
  const ul = document.getElementById('liste-panier');
  ul.innerHTML = '';
  panier.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item}`;
    ul.appendChild(li);
  });
}
