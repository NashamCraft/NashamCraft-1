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

})