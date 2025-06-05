
StartupEvents.registry('item', event => {
    /*event.create('universal_press')
    .texture('kubejs:item/universal_press')
    .maxStackSize(64)
    .displayName('Universal Press');  */

    event.create('dragonsteel_ingot')
    .texture('kubejs:item/dragonsteel_ingot')
    .maxStackSize(64)
    .rarity('epic')
    .displayName('Dragonsteel Ingot')

    event.create('netherite_bow')
    .texture('kubejs:item/netherite_bow')
    .maxStackSize(1)
    .displayName('Netherite Bow')
    .tooltip("Used for crafting only")

    /*
    event.create('dragonsteel_nugget')
    .texture('kubejs:item/dragonsteel_nugget')
    .maxStackSize(64)
    .rarity('epic')
    .displayName('Dragonsteel Nugget')  
    .tooltip('Used to create end-game items')

    event. create ('ravager_hide')
    .texture('kubejs:item/ravager_hide')
    .maxStackSize(64)
    .displayName('Ravager Hide')
*/
    event. create ('overinfused_breath')
    .texture('kubejs:item/overinfused_breath')
    .maxStackSize(64)
    .displayName("Overinfused Dragon's Breath")
    .rarity('epic')
    .glow(true)
    .tooltip("Don't worry, it won't explode")

    
    event. create ('nether_seal')
    .texture('kubejs:item/nether_seal')
    .maxStackSize(1)
    .rarity('rare')
    .displayName('Nether Seal')
    .tooltip('Allows access to The Nether')
    .useAnimation('none')
    .useDuration(itemstack => 0)
    .use((level, player, hand) => true)


    event. create ('echo_crystal')
    .texture('kubejs:item/echo_crystal')
    .maxStackSize(1)
    .rarity('common')
    .displayName('Echo Crystal')
    
    /*
    event. create ('twilight_seal')
    .texture('kubejs:item/twilight_seal')
    .maxStackSize(1)
    .rarity('epic')
    .displayName('Twilight Seal')
    .tooltip('Allows access to The Twilight Forest once crafted')
    

    event. create ('icon')
    .texture('kubejs:item/icon')
    .maxStackSize(1)
    .displayName("Icon")
    .rarity('epic')
    */
})
