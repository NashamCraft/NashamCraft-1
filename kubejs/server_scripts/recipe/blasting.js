ServerEvents.recipes(event =>{
    event.blasting('cataclysm:ancient_metal_nugget',['cataclysm:khopesh','cataclysm:ancient_spear'])
    event.blasting('cataclysm:black_steel_nugget',
        ['cataclysm:black_steel_axe',                                        
        'cataclysm:black_steel_sword',
        'cataclysm:black_steel_shovel',
        'cataclysm:black_steel_hoe',
        'cataclysm:black_steel_pickaxe']
    )

    event.blasting('4x minecraft:gold_ingot', 'minecraft:bell')
})