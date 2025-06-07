//onEvent('recipes', event => {
ServerEvents.recipes(event => {   
    //Remove by Recipe ID
    [
        'storagedrawers:emerald_storage_upgrade',
        'storagedrawers:diamond_storage_upgrade',
        'storagedrawers:gold_storage_upgrade',
        'storagedrawers:iron_storage_upgrade',
        'storagedrawers:obsidian_storage_upgrade',

        'mffs:steel_ingot',
        
    
        'buildinggadgets2:gadget_exchanging',

        'advanced_ae:quantum_helmet',
        'advanced_ae:quantum_chest',
        'advanced_ae:quantum_leggings',
        'advanced_ae:quantum_boots',

        'advanced_ae:quantum_base_card',
        'advanced_ae:walk_speed_card',
        'advanced_ae:sprint_speed_card',
        'advanced_ae:step_assist_card',
        'advanced_ae:jump_height_card',
        'advanced_ae:lava_immunity_card',
        'advanced_ae:flight_card',
        'advanced_ae:water_breathing_card',
        'advanced_ae:auto_feed_card',
        'advanced_ae:auto_stock_card',
        'advanced_ae:magnet_card',
        'advanced_ae:hp_buffer_card',
        'advanced_ae:evasion_card',
        'advanced_ae:regeneration_card',
        'advanced_ae:strength_card',
        'advanced_ae:attack_speed_card',
        'advanced_ae:luck_card',
        'advanced_ae:reach_card',
        'advanced_ae:swim_speed_card',
        'advanced_ae:night_vision_card',
        'advanced_ae:flight_drift_card',
        'advanced_ae:recharging_card',
        'advanced_ae:portable_workbench_card',
        'advanced_ae:pick_craft_card',

        'advanced_ae:quantum_alloy_plate',

        'explorerscompass:explorers_compass',
    
        'mekanism:metallurgic_infuser',
        'ae2:network/blocks/inscribers',

        'cataclysm:ignitium_upgrade_smithing_template',
        'cataclysm:the_incinerator',
        'cataclysm:bulwark_of_the_flame',

        'cataclysm:cursium_upgrade_smithing_template',
        'cataclysm:soul_render',
        'cataclysm:cursed_bow',
        'cataclysm:the_annihilator',

        //Applied Flux
        'appflux:1k_core',
        'appflux:4k_core',
        'appflux:16k_core',
        'appflux:64k_core',
        'appflux:256k_core',
        'appflux:1m_core',
        'appflux:4m_core',
        'appflux:16m_core',
        'appflux:64m_core',
        'appflux:256m_core',

        'appflux:inscriber/crush_emerald',
        'appflux:inscriber/crush_diamond',

        'hostilenetworks:prediction_matrix',

        'mob_grinding_utils:gm_chicken_feed',
        'mob_grinding_utils:mob_swab',

        'integrateddynamics:crafting/proto_chorus',


        'projecte:philosophers_stone_alt'

    ].forEach((recipeID) => event.remove({id: recipeID}));

    //Remove all recipes an item is related to. For example putting 'minecraft:bonemeal' here would remove the recipe for bone blocks as well.
    
    [

    ].forEach((ingredientID) => event.remove({input: ingredientID}));

    //Remove by output item ID
    [
        // Rftools



        'rftoolsutility:advanced_charged_porter',
        'rftoolsutility:charged_porter',
        'rftoolsutility:teleport_probe',
        'rftoolsutility:simple_dialer',
        'rftoolsutility:matter_booster',
        'rftoolsutility:destination_analyzer',
        'rftoolsutility:dialing_device',
        'rftoolsutility:matter_receiver',
        'rftoolsutility:matter_transmitter',
        'rftoolsutility:tank',
        'rftoolsutility:spawner',
        'rftoolsutility:matter_beamer',

        'mifa:netherite_gear',

        // MCW Fence
        'mcwfences:acacia_hedge',
        'mcwfences:azalea_hedge',
        'mcwfences:birch_hedge',
        'mcwfences:cherry_hedge',
        'mcwfences:dark_oak_hedge',
        'mcwfences:flowering_azalea_hedge',
        'mcwfences:jungle_hedge',
        'mcwfences:mangrove_hedge',
        'mcwfences:oak_hedge',
        'mcwfences:spruce_hedge',

        //Modular Force Field System
        'mffs:steel_compound',
        'mffs:steel_ingot',
        
        // Apothic Enchanting
        'apothic_enchanting:occult_ender_lead',
        'apothic_enchanting:ender_lead',
        
        // More Industrial Foregoing Addons
        'mifa:efficiency_addon_6',
        'mifa:efficiency_addon_7',
        'mifa:efficiency_addon_8',
        'mifa:processing_addon_6',
        'mifa:processing_addon_7',
        'mifa:processing_addon_8',
        'mifa:speed_addon_6',
        'mifa:speed_addon_7',
        'mifa:speed_addon_8',

        //Macaw's Lights
        'mcwlights:oak_ceiling_fan_light',
        'mcwlights:spruce_ceiling_fan_light',
        'mcwlights:birch_ceiling_fan_light',
        'mcwlights:jungle_ceiling_fan_light',
        'mcwlights:dark_oak_ceiling_fan_light',
        'mcwlights:acacia_ceiling_fan_light',
        'mcwlights:cherry_ceiling_fan_light',
        'mcwlights:warped_ceiling_fan_light',
        'mcwlights:crimson_ceiling_fan_light',
        'mcwlights:mangrove_ceiling_fan_light',
        'mcwlights:acacia_tiki_torch',
        'mcwlights:bamboo_tiki_torch',
        'mcwlights:bell_lantern',
        'mcwlights:bell_wall_lantern',
        'mcwlights:birch_tiki_torch',
        'mcwlights:black_ceiling_light',
        'mcwlights:black_lamp',
        'mcwlights:black_paper_lamp',
        'mcwlights:blue_ceiling_light',
        'mcwlights:blue_lamp',
        'mcwlights:blue_paper_lamp',
        'mcwlights:brown_ceiling_light',
        'mcwlights:brown_lamp',
        'mcwlights:brown_paper_lamp',
        'mcwlights:chain_lantern',
        'mcwlights:chain_wall_lantern',
        'mcwlights:cherry_tiki_torch',
        'mcwlights:covered_lantern',
        'mcwlights:covered_wall_lantern',
        'mcwlights:crimson_tiki_torch',
        'mcwlights:cross_lantern',
        'mcwlights:cross_wall_lantern',
        'mcwlights:cyan_ceiling_light',
        'mcwlights:cyan_lamp',
        'mcwlights:cyan_paper_lamp',
        'mcwlights:dark_oak_tiki_torch',
        'mcwlights:festive_lantern',
        'mcwlights:festive_wall_lantern',
        'mcwlights:gray_ceiling_light',
        'mcwlights:gray_lamp',
        'mcwlights:gray_paper_lamp',
        'mcwlights:green_ceiling_light',
        'mcwlights:green_lamp',
        'mcwlights:green_paper_lamp',
        'mcwlights:jungle_tiki_torch',
        'mcwlights:light_blue_ceiling_light',
        'mcwlights:light_blue_lamp',
        'mcwlights:light_blue_paper_lamp',
        'mcwlights:light_gray_ceiling_light',
        'mcwlights:light_gray_lamp',
        'mcwlights:light_gray_paper_lamp',
        'mcwlights:lime_ceiling_light',
        'mcwlights:lime_lamp',
        'mcwlights:lime_paper_lamp',
        'mcwlights:magenta_ceiling_light',
        'mcwlights:magenta_lamp',
        'mcwlights:magenta_paper_lamp',
        'mcwlights:mangrove_tiki_torch',
        'mcwlights:oak_tiki_torch',
        'mcwlights:orange_ceiling_light',
        'mcwlights:orange_lamp',
        'mcwlights:orange_paper_lamp',
        'mcwlights:pink_ceiling_light',
        'mcwlights:pink_lamp',
        'mcwlights:pink_paper_lamp',
        'mcwlights:purple_ceiling_light',
        'mcwlights:purple_lamp',
        'mcwlights:purple_paper_lamp',
        'mcwlights:red_ceiling_light',
        'mcwlights:red_lamp',
        'mcwlights:red_paper_lamp',
        'mcwlights:soul_acacia_tiki_torch',
        'mcwlights:soul_bamboo_tiki_torch',
        'mcwlights:soul_birch_tiki_torch',
        'mcwlights:soul_cherry_tiki_torch',
        'mcwlights:soul_crimson_tiki_torch',
        'mcwlights:soul_dark_oak_tiki_torch',
        'mcwlights:soul_jungle_tiki_torch',
        'mcwlights:soul_mangrove_tiki_torch',
        'mcwlights:soul_oak_tiki_torch',
        'mcwlights:soul_spruce_tiki_torch',
        'mcwlights:soul_warped_tiki_torch',
        'mcwlights:spruce_tiki_torch',
        'mcwlights:square_wall_lamp',
        'mcwlights:striped_lantern',
        'mcwlights:striped_wall_lantern',
        'mcwlights:tavern_lantern',
        'mcwlights:tavern_wall_lantern',
        'mcwlights:wall_lamp',
        'mcwlights:wall_lantern',
        'mcwlights:warped_tiki_torch',
        'mcwlights:white_ceiling_light',
        'mcwlights:white_lamp',
        'mcwlights:white_paper_lamp',
        'mcwlights:yellow_ceiling_light',
        'mcwlights:yellow_lamp',
        'mcwlights:yellow_paper_lamp',

        //Xycraft
        'xycraft_machines:buffer',
        'xycraft_machines:collector',
        'xycraft_machines:fabricator',
        'xycraft_machines:fluid_selector',
        'xycraft_machines:fluid_void',
        'xycraft_machines:foil',
        'xycraft_machines:hydro_pump',
        'xycraft_machines:ignition_plate',
        'xycraft_machines:incomplete_processor',
        'xycraft_machines:item_io',
        'xycraft_machines:item_selector',
        'xycraft_machines:light_field',
        'xycraft_machines:machine_base',
        'xycraft_machines:planter',
        'xycraft_machines:port_energy',
        'xycraft_machines:port_fluid',
        'xycraft_machines:port_item',
        'xycraft_machines:resin_ball',
        'xycraft_machines:resin_block',
        'xycraft_machines:soaryn_box',
        'xycraft_machines:stake',
        'xycraft_machines:valve',
        'xycraft_machines:void_container',
        'xycraft_machines:water_block',

        'ars_nouveau:ritual_containment',

        //CC
        'computercraft:computer_normal',
        'computercraft:turtle_normal',
        'computercraft:pocket_computer_normal',
        'computercraft:computer_advanced',
        'computercraft:turtle_advanced',
        'computercraft:pocket_computer_advanced',
        'computercraft:disk_drive',
        'computercraft:printer',
        'computercraft:speaker',
        'computercraft:wireless_modem_advanced',
        'computercraft:wireless_modem_normal',
        'computercraft:monitor_normal',
        'computercraft:monitor_advanced'
        

    ].forEach((itemID) => event.remove({output: itemID}));

    /*
    //Remove Some UtilitiX Recipes
    /*event.remove({mod: 'utilitix', not:{output:[
        'utilitix:stone_wall',
        'utilitix:armed_stand',
        'utilitix:experience_crystal',
        'utilitix:gilding_crystal',
        'utilitix:tiny_charcoal',
        'utilitix:tiny_coal',
        'utilitix:weak_redstone_torch',

        ]}})*/

})

