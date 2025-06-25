ItemEvents.modification(event => {
  // Helper function to apply only attack speed modifier
  function setAttackSpeed(itemId, speed) {
    event.modify(itemId, item => {
      let modifiers = Item.of(item.item().id).attributeModifiers
        .withModifierAdded(
          "generic.attack_speed",
          {
            amount: speed - 4.0, // Adjust relative to base attack speed
            id: itemId,
            operation: "add_value"
          },
          "mainhand"
        );

      item.setAttributeModifiersWithTooltip(modifiers.modifiers());
    });
  }

  // Apply attack speed changes
  setAttackSpeed('minecraft:shield', 0.8);
  setAttackSpeed('cataclysm:black_steel_targe', 0.8);
  setAttackSpeed('cataclysm:bulwark_of_the_flame', 0.8);
  setAttackSpeed('cataclysm:azure_sea_shield', 0.8);
  setAttackSpeed('ars_nouveau:enchanters_shield', 0.8);
});
