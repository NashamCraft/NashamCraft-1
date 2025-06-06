ServerEvents.recipes(event =>{

       /*event.shaped('minecraft:bundle',[
        'S ',
        'L ',
    ],{
        L: 'minecraft:leather',
        S: 'minecraft:string'
    })*/

    event.shaped('tempad:creative_chronometer',[
        '   ',
        'ACA',
        '   '
    ],{
        C: 'tempad:chronometer',
        A: 'mekanism:pellet_antimatter'
    })   
   
    event.shaped('kubejs:echo_crystal',[
        ' G ',
        'GSG',
        ' G '
    ],{
        G: 'minecraft:echo_shard',
        S: 'minecraft:sculk_shrieker'
    })

    event.shaped('kubejs:nether_seal',[
        ' G ',
        'GSG',
        ' G '
    ],{
        G: 'minecraft:gold_ingot',
        S: 'kubejs:echo_crystal'
    })

    event.shaped('explorerscompass:explorerscompass',[
        ' A ',
        'DEF',
        ' H '
    ],{
        A: 'cataclysm:cursed_eye',
        D: 'cataclysm:mech_eye',
        E: 'minecraft:recovery_compass',
        F: 'cataclysm:abyss_eye',
        H: 'cataclysm:desert_eye'
    })

    /*event.shaped('kubejs:universal_press',[
        'IAI',
        'DEF',
        'IHI'
    ],{
        A: 'ae2:calculation_processor_press',
        D: 'ae2:engineering_processor_press',
        E: 'minecraft:slime_ball',
        F: 'ae2:logic_processor_press',
        H: 'ae2:silicon_press',
        I: 'extendedae:entro_ingot'
    })*/

    event.shaped('buildinggadgets2:gadget_exchanging',[
        'IAI',
        'DED',
        'IHI'
    ],{
        A: 'minecraft:redstone',
        D: 'minecraft:diamond',
        E: 'minecraft:lapis_lazuli',
        H: 'mekanism:ultimate_control_circuit',
        I: 'minecraft:iron_ingot'
    })

    event.shaped('3x cataclysm:ignitium_upgrade_smithing_template',[
        'ETE',
        'ENE',
        'EEE'
    ],{
        T: 'cataclysm:ignitium_upgrade_smithing_template',
        N: 'minecraft:netherite_ingot',
        E: 'minecraft:blaze_rod',
    })

    event.shaped('3x cataclysm:cursium_upgrade_smithing_template',[
        'ETE',
        'ENE',
        'EEE'
    ],{
        T: 'cataclysm:cursium_upgrade_smithing_template',
        N: 'minecraft:gold_block',
        E: 'cataclysm:black_steel_ingot',
    })

    // Applied Flux
    event.shaped('appflux:core_1k',[
        'DRD',
        'ROR',
        'CRP'
    ],{
        D: 'ae2:certus_quartz_dust',
        R: 'appflux:redstone_crystal',
        O: 'ae2:logic_processor',
        C: 'mekanism:basic_induction_cell',
        P:'mekanism:basic_induction_provider'
    })

    event.shaped('appflux:core_4k',[
        'DOD',
        'RER',
        'DRD'
    ],{
        D: 'ae2:certus_quartz_dust',
        R: 'appflux:core_1k',
        O: 'appflux:energy_processor',
        E:'mekanism:advanced_energy_cube'
    })

    event.shaped('appflux:core_16k',[
        'DOD',
        'RER',
        'DRD'
    ],{
        D: 'ae2:certus_quartz_dust',
        R: 'appflux:core_4k',
        O: 'appflux:energy_processor',
        E:'mekanism:elite_energy_cube'
    })

    event.shaped('appflux:core_64k',[
        'DOD',
        'RER',
        'DRD'
    ],{
        D: 'ae2:fluix_dust',
        R: 'appflux:core_16k',
        O: 'appflux:energy_processor',
        E:'mekanism:ultimate_energy_cube'
    })

    event.shaped('appflux:core_256k',[
        'DOD',
        'RER',
        'DRD'
    ],{
        D: 'ae2:fluix_dust',
        R: 'appflux:core_64k',
        O: 'appflux:energy_processor',
        E:'mekanism:basic_induction_cell'
    })

    event.shaped('appflux:core_1m',[
        'DOD',
        'RER',
        'DRD'
    ],{
        D: 'extendedae:entro_dust',
        R: 'appflux:core_256k',
        O: 'ae2:engineering_processor',
        E:'mekanism:basic_induction_cell'
    })

    event.shaped('appflux:core_4m',[
        'DOD',
        'RER',
        'DRD'
    ],{
        D: 'extendedae:entro_dust',
        R: 'appflux:core_1m',
        O: 'ae2:engineering_processor',
        E:'mekanism:advanced_induction_cell'
    })

    event.shaped('appflux:core_16m',[
        'DOD',
        'RER',
        'DRD'
    ],{
        D: 'advanced_ae:quantum_infused_dust',
        R: 'appflux:core_4m',
        O: 'extendedae:concurrent_processor',
        E:'mekanism:elite_induction_cell'
    })

    event.shaped('appflux:core_64m',[
        'DOD',
        'RER',
        'DRD'
    ],{
        D: 'advanced_ae:quantum_infused_dust',
        R: 'appflux:core_16m',
        O: 'extendedae:concurrent_processor',
        E:'mekanism:ultimate_induction_cell'
    })

    event.shaped('appflux:core_256m',[
        'DOD',
        'RER',
        'DRD'
    ],{
        D: 'mekanism:ultimate_induction_provider',
        R: 'appflux:core_64m',
        O: 'advanced_ae:quantum_processor',
        E:'mekanism:ultimate_induction_cell'
    })

    event.shaped('minecraft:hopper',[
        'IWI',
        'IWI',
        ' I '
    ],{
        I: 'minecraft:iron_ingot',
        W: '#minecraft:logs',
    })

    event.shaped('4x minecraft:chest',[
        'WWW',
        'W W',
        'WWW'
    ],{
        W: '#minecraft:logs',
    })

    event.shaped('mcwlights:golden_low_candle_holder',[
        '   ',
        ' C ',
        ' I '
    ],{
        I:'minecraft:gold_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:golden_candle_holder',[
        '   ',
        'ICI',
        ' I '
    ],{
        I:'minecraft:gold_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:golden_wall_candle_holder',[
        '   ',
        '   ',
        'CII'
    ],{
        I:'minecraft:gold_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:golden_double_candle_holder',[
        '   ',
        'CIC',
        ' I '
    ],{
        I:'minecraft:gold_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:golden_triple_candle_holder',[
        '   ',
        'CCC',
        ' I '
    ],{
        I:'minecraft:gold_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:golden_small_chandelier',[
        '   ',
        ' I ',
        'CIC'
    ],{
        I:'minecraft:gold_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:golden_chandelier',[
        ' I ',
        'CIC',
        'I I'
    ],{
        I:'minecraft:gold_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:iron_low_candle_holder',[
        '   ',
        ' C ',
        ' I '
    ],{
        I:'minecraft:iron_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:iron_candle_holder',[
        '   ',
        'ICI',
        ' I '
    ],{
        I:'minecraft:iron_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:iron_wall_candle_holder',[
        '   ',
        '   ',
        'CII'
    ],{
        I:'minecraft:iron_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:iron_double_candle_holder',[
        '   ',
        'CIC',
        ' I '
    ],{
        I:'minecraft:iron_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:iron_triple_candle_holder',[
        '   ',
        'CCC',
        ' I '
    ],{
        I:'minecraft:iron_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:iron_small_chandelier',[
        '   ',
        ' I ',
        'CIC'
    ],{
        I:'minecraft:iron_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:iron_chandelier',[
        ' I ',
        'CIC',
        'I I'
    ],{
        I:'minecraft:iron_ingot',
        C:'#minecraft:candles'
    })
    
    event.shaped('mcwlights:copper_low_candle_holder',[
        '   ',
        ' C ',
        ' I '
    ],{
        I:'minecraft:copper_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:copper_candle_holder',[
        '   ',
        'ICI',
        ' I '
    ],{
        I:'minecraft:copper_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:copper_wall_candle_holder',[
        '   ',
        '   ',
        'CII'
    ],{
        I:'minecraft:copper_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:copper_double_candle_holder',[
        '   ',
        'CIC',
        ' I '
    ],{
        I:'minecraft:copper_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:copper_triple_candle_holder',[
        '   ',
        'CCC',
        ' I '
    ],{
        I:'minecraft:copper_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:copper_small_chandelier',[
        '   ',
        ' I ',
        'CIC'
    ],{
        I:'minecraft:copper_ingot',
        C:'#minecraft:candles'
    })

    event.shaped('mcwlights:copper_chandelier',[
        ' I ',
        'CIC',
        'I I'
    ],{
        I:'minecraft:copper_ingot',
        C:'#minecraft:candles'
    })

    //CC

    event.shaped('computercraft:pocket_computer_normal',[
        ' C ',
        ' R ',
        ' G '
    ],{
        C:'create:andesite_alloy',
        R:'minecraft:golden_apple',
        G:'#c:glass_panes'
    })

    event.shaped('computercraft:pocket_computer_advanced',[
        ' C ',
        ' R ',
        ' G '
    ],{
        C:'create:brass_ingot',
        R:'minecraft:golden_apple',
        G:'#c:glass_panes'
    })

    event.shaped('computercraft:pocket_computer_advanced',[
        ' C ',
        ' R ',
        '   '
    ],{
        C:'create:brass_ingot',
        R:'computercraft:pocket_computer_normal',
    })



    event.shaped('computercraft:computer_normal',[
        ' C ',
        ' R ',
        ' G '
    ],{
        C:'create:andesite_casing',
        R:'minecraft:redstone',
        G:'#c:glass_panes'
    })

    event.shaped('computercraft:speaker',[
        ' C ',
        ' R ',
        ' G '
    ],{
        C:'create:andesite_casing',
        R:'minecraft:note_block',
        G:'minecraft:redstone'
    })

    event.shaped('4x computercraft:monitor_normal',[
        ' C ',
        ' R ',
        '   '
    ],{
        C:'create:andesite_casing',
        R:'#c:glass_panes',
    })

    event.shaped('computercraft:printer',[
        ' C ',
        ' R ',
        ' G '
    ],{
        C:'create:andesite_casing',
        R:'minecraft:redstone',
        G:'#c:dyes'
    })

    event.shaped('computercraft:disk_drive',[
        ' C ',
        ' R ',
        ' R '
    ],{
        C:'create:andesite_casing',
        R:'minecraft:redstone',
    })

    event.shaped('computercraft:turtle_normal',[
        'CCC',
        'CRC',
        'CGC'
    ],{
        C:'create:andesite_alloy',
        R:'computercraft:computer_normal',
        G:'#c:chests/wooden'
    })

    event.shaped('computercraft:computer_advanced',[
        ' C ',
        ' R ',
        ' G '
    ],{
        C:'create:brass_casing',
        R:'minecraft:redstone',
        G:'#c:glass_panes'
    })

    event.shaped('computercraft:computer_advanced',[
        ' C ',
        ' R ',
        '   '
    ],{
        C:'create:brass_ingot',
        R:'computercraft:computer_normal',
    })

    event.shaped('computercraft:turtle_advanced',[
        'CCC',
        'CRC',
        'CGC'
    ],{
        C:'create:brass_ingot',
        R:'computercraft:computer_advanced',
        G:'#c:chests/wooden'
    })

    event.shaped('computercraft:turtle_advanced',[
        'CCC',
        'CRC',
        'CCC'
    ],{
        C:'create:brass_ingot',
        R:'computercraft:turtle_normal',
    })


    event.shaped('4x computercraft:monitor_advanced',[
        ' C ',
        ' R ',
        '   '
    ],{
        C:'create:brass_casing',
        R:'#c:glass_panes',
    })

    event.shaped('computercraft:wireless_modem_normal',[
        ' A ',
        'ARA',
        ' C '
    ],{
        C:'create:andesite_casing',
        A:'create:andesite_alloy',
        R:'minecraft:ender_pearl',
    })

    event.shaped('computercraft:wireless_modem_advanced',[
        ' A ',
        'ARA',
        ' C '
    ],{
        C:'create:brass_casing',
        A:'create:brass_ingot',
        R:'minecraft:ender_eye',
    })

    event.shaped('advancedperipherals:end_automata_core',[
        'RCR',
        ' T ',
        'R R'
    ],{
        C:'advancedperipherals:peripheral_casing',
        T:'mekanism:teleportation_core',
        R:'minecraft:redstone_block',
    })

    event.shaped('advancedperipherals:husbandry_automata_core',[
        'RCR',
        'WSW',
        'ROR'
    ],{
        C:'advancedperipherals:peripheral_casing',
        W:'minecraft:wheat',
        S:'minecraft:wheat_seeds',
        R:'minecraft:redstone_block',
        O:'minecraft:carrot'
    })

    event.shaped('minecraft:saddle',[
        'SLS',
        'I I',
        '   '
    ],{
        S:'minecraft:string',
        I:'minecraft:leather',
        L:'minecraft:iron_ingot',
    })

    event.shaped('16x minecraft:stick',[
        ' L ',
        ' L ',
        '   '
    ],{
        L:'#minecraft:logs'
    })   


})