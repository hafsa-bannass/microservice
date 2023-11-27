var commandes = [];
// Define a class named Commande
class Commande {
  // Constructor function to initialize object properties
  constructor(id, productId, dateCommande, quantite, commandePayee){
    this.id = id;
    this.productId = productId;
    this.dateCommande = dateCommande;
    this.quantite = quantite;
    this.commandePayee = commandePayee;
  }
  // Static method to find a Commande by its ID
  static findById(id) {
    return commandes.find(cmd => cmd.id === id);
  }
  // Static method to save a new Commande instance to the array
  static save(commande) {
    commandes.push(commande);
  }
  // Static method to update an existing Commande by ID with new data
  static update(id, updatedCommande) {
    // Find the index of the Commande with the given ID in the array
    const commandeIndex = commandes.findIndex(cmd => cmd.id === id);
    
    // If the Commande with the given ID is not found, return null
    if (commandeIndex === -1) {
      return null;
    } else {
      // Update the Commande at the found index with the new data
      commandes[commandeIndex] = { ...commandes[commandeIndex], ...updatedCommande };
      // Return the updated Commande
      return commandes[commandeIndex];
    }
  }
}
// Export the Commande class for use in other modules
module.exports = Commande;

