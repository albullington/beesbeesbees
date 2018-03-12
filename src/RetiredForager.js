var RetiredForagerBee = function() {
  Grub.call(this, arguments);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.treasureChest = [];
};

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.eat = Grub.prototype.eat;

RetiredForagerBee.prototype.gamble = ForagerBee.prototype.forage;