ServerEvents.recipes(event =>{
    //Cataclysm

    //End Stone
    event.stonecutting('cataclysm:polished_end_stone', 'minecraft:end_stone')
    event.stonecutting('cataclysm:chiseled_end_stone_bricks', 'minecraft:end_stone_bricks')
    event.stonecutting('cataclysm:end_stone_pillar', ['minecraft:end_stone_bricks','minecraft:end_stone'])
    event.stonecutting('cataclysm:polished_end_stone_stairs', ['cataclysm:polished_end_stone','minecraft:end_stone'])
    event.stonecutting('2x cataclysm:polished_end_stone_slab', ['cataclysm:polished_end_stone','minecraft:end_stone'])
    //Purpur

    event.stonecutting('cataclysm:chiseled_purpur_block', 'minecraft:purpur_block')
    event.stonecutting('cataclysm:purpur_wall', 'minecraft:purpur_block')

    //Obsidian
    event.stonecutting('cataclysm:obsidian_bricks', 'minecraft:obsidian')
    event.stonecutting('cataclysm:chiseled_obsidian_bricks', ['cataclysm:obsidian_bricks','minecraft:obsidian'])
    event.stonecutting('cataclysm:obsidian_brick_stairs', ['cataclysm:obsidian_bricks','minecraft:obsidian'])
    event.stonecutting('cataclysm:obsidian_brick_wall', ['cataclysm:obsidian_bricks','minecraft:obsidian'])
    event.stonecutting('2x cataclysm:obsidian_brick_slab', ['cataclysm:obsidian_bricks','minecraft:obsidian'])

    //Frosted Bricks
    event.stonecutting('cataclysm:frosted_stone_brick_stairs', 'cataclysm:frosted_stone_bricks')
    event.stonecutting('cataclysm:frosted_stone_brick_wall', 'cataclysm:frosted_stone_bricks')
    event.stonecutting('2x cataclysm:frosted_stone_brick_slab', 'cataclysm:frosted_stone_bricks')

    //Quartz
    event.stonecutting('cataclysm:quartz_brick_wall', 'minecraft:quartz_bricks')

    //Stone Bricks
    event.stonecutting('cataclysm:stone_tiles', ['minecraft:stone','minecraft:stone_bricks'])
    event.stonecutting('cataclysm:stone_pillar', 'minecraft:stone')
    event.stonecutting('cataclysm:chiseled_stone_brick_pillar', ['minecraft:stone_bricks','minecraft:stone','minecraft:chiseled_stone_bricks'])
    event.stonecutting('cataclysm:stone_tile_stairs', ['cataclysm:stone_tiles','minecraft:stone'])
    event.stonecutting('cataclysm:stone_tile_wall', ['cataclysm:stone_tiles','minecraft:stone'])
    event.stonecutting('2x cataclysm:stone_tile_slab', ['cataclysm:stone_tiles','minecraft:stone'])

})