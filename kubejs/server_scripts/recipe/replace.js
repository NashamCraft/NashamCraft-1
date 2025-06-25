
/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {

  // ----- Convenience Functions -----
  // Replace inputs and outputs across all recipes that use the given ingredient / item.
  const replaceInput = (from, to) => {event.replaceInput({}, from, to)};
  const replaceOutput = (from, to) => {event.replaceOutput({}, from, to)};

  // Replace inputs / outputs by recipe ID.
  const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)};
  const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to)};

  // Replace inputs / outputs by recipe type.
  const replaceInputType = (recipeType, from, to) => {event.replaceInput({type: recipeType}, from, to)};
  const replaceOutputType = (recipeType, from, to) => {event.replaceOutput({type: recipeType}, from, to)};

  replaceInput('mffs:steel_ingot','mekanism:ingot_steel')
  replaceInput('#c:plates/iron','create:iron_sheet')
  replaceInput('#c:plates/gold','create:golden_sheet')
  replaceInput('#c:plates/copper','create:copper_sheet')

  replaceInputID('ars_nouveau:ritual_flight', 'minecraft:diamond', 'minecraft:chorus_flower')
  replaceInputID('ars_nouveau:novice_spell_book', 'minecraft:iron_sword', 'minecraft:dragon_breath')
  replaceInputID('ars_nouveau:novice_spellbook_alt', 'minecraft:iron_sword', 'minecraft:dragon_breath')
  replaceInputID('ars_nouveau:enchanting_apparatus', 'minecraft:diamond', 'minecraft:netherite_ingot')
  replaceInputID('ars_nouveau:imbuement_chamber', 'minecraft:gold_ingot', 'minecraft:amethyst_shard')
  replaceInputID('ars_nouveau:ritual_brazier', 'minecraft:gold_ingot', 'minecraft:diamond')
  replaceInputID('ars_nouveau:ritual_brazier', 'ars_nouveau:source_gem_block', 'minecraft:budding_amethyst')

  replaceInputID('irons_spellbooks:arcane_anvil', 'minecraft:diamond', 'minecraft:netherite_ingot')
  replaceInputID('irons_spellbooks:diamond_spell_book', 'minecraft:diamond', 'minecraft:netherite_scrap')
  replaceInputID('irons_spellbooks:diamond_spell_book', 'minecraft:enchanted_book', 'irons_spellbooks:chained_book')
  replaceInputID('irons_spellbooks:inscription_table', 'minecraft:book', 'minecraft:enchanted_book')

  replaceInputID('buildinggadgets2:gadget_building', 'minecraft:lapis_lazuli', 'mekanism:ultimate_control_circuit')
  replaceInputID('buildinggadgets2:template_manager', 'minecraft:lapis_lazuli', 'mekanism:ultimate_control_circuit')
  replaceInputID('buildinggadgets2:gadget_copy_paste', 'minecraft:lapis_lazuli', 'mekanism:ultimate_control_circuit')
  replaceInputID('buildinggadgets2:gadget_cut_paste', 'minecraft:lapis_lazuli', 'mekanism:ultimate_control_circuit')
  replaceInputID('buildinggadgets2:gadget_destruction', 'minecraft:lapis_lazuli', 'mekanism:ultimate_control_circuit')

  replaceInputID('industrialforegoing:machine_frame_pity','minecraft:redstone_block', 'mekanism:alloy_infused')
  replaceInputID('rftoolsbase:machine_frame','minecraft:blue_dye', 'mekanism:alloy_infused')

  replaceInputID('integratedterminals:crafting/part_terminal_storage','minecraft:glowstone_dust', 'minecraft:netherite_scrap')
  replaceInputID('torchmaster:megatorch','minecraft:diamond', 'minecraft:netherite_scrap')

  replaceInputID('fluxnetworks:flux_core','minecraft:ender_eye', 'mekanism:pellet_plutonium')
  replaceInputID('fluxnetworks:flux_controller','fluxnetworks:flux_core', 'fluxnetworks:flux_dust')

  replaceInputID('refurbished_furniture:workbench','minecraft:redstone_block', 'mekanism:alloy_infused')
  replaceInputID('refurbished_furniture:light_electricity_generator','minecraft:redstone_block', 'mekanism:alloy_infused')

  replaceInputID('xycraft_machines:shaped/extractor', ['xycraft_machines:port_item','xycraft_machines:port_fluid'], 'mekanism:ultimate_control_circuit')
  replaceInputID('xycraft_machines:shaped/extractor', "minecraft:piston", 'mekanism:sps_casing')

  replaceInputID('shrink:shrinking_device', 'minecraft:iron_ingot', 'mekanism:hdpe_sheet')
  replaceInputID('shrink:shrinking_device', 'minecraft:ender_pearl', 'mekanism:elite_control_circuit')

  replaceInputID('createaddition:crafting/modular_accumulator', 'createaddition:electrum_wire', 'createaddition:gold_wire')

  event.replaceInput(
    { mod: 'tempad' }, // Filter: targets recipes from 'some_mod'
    'minecraft:ender_pearl', // Item to replace
    'mekanism:teleportation_core' // Replacement item
  )


  replaceInputID('tempad:tempad', 'minecraft:quartz', 'mekanism:pellet_antimatter')
  replaceInputID('tempad:tempad', 'mekanism:teleportation_core', 'mekanism:portable_teleporter')
  replaceInputID('tempad:time_steel_shaped', 'minecraft:iron_ingot', 'mekanism:pellet_plutonium')

  replaceInputID('mekanism:module_elytra_unit', 'mekanism:pellet_antimatter', 'mekanism:pellet_polonium')

  replaceInputID('computercraft:redstone_relay', 'minecraft:stone', 'create:andesite_alloy')
  replaceInputID('computercraft:cable', 'minecraft:stone', 'create:andesite_alloy')
  replaceInputID('computercraft:wired_modem', 'minecraft:stone', 'create:andesite_alloy')
  
  replaceInputID('apothic_enchanting:hellshelf', ['minecraft:blaze_rod','minecraft:potion'], 'cataclysm:lava_power_cell')
  replaceInputID('apothic_enchanting:seashelf', ['minecraft:pufferfish','minecraft:potion'], 'kubejs:water_power_cell')

});
