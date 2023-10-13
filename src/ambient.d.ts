declare namespace StarRail {
    export interface Error {
        detail: string;
    }
    export interface User {
        player: Player;
        characters: (Character)[];
    }
    export interface Player {
        uid: string;
        nickname: string;
        level: number;
        world_level: number;
        friend_count: number;
        avatar: Avatar;
        signature: string;
        is_display: boolean;
        space_info: SpaceInfo;
        memory_info: MemoryInfo;
    }
    export interface Avatar {
        id: string;
        name: string;
        icon: string;
    }
    export interface Path {
        id: string;
        name: string;
        icon: string;
    }
    export interface SpaceInfo {
        challenge_data: ChallengeData;
        memory_data: MemoryData;
        pass_area_progress: number;
        light_cone_count: number;
        avatar_count: number;
        achievement_count: number;
    }
    export interface ChallengeData {
        maze_group_id: number;
        maze_group_index: number;
        pre_maze_group_index: number;
    }
    export interface MemoryData {
        level: number;
        chaos_id: number;
        chaos_level: number;
    }
    export interface Character {
			id: string;
			name: string;
			rarity: number;
			rank: number;
			level: number;
			promotion: number;
			icon: string;
			preview: string;
			portrait: string;
			rank_icons: string[];
			path: Path;
			element: Element;
			skills: Skill[];
			skill_trees: SkillTree[];
			light_cone: LightCone;
			relics: Relic[];
			relic_sets: RelicSet[];
			attributes: Attribute[];
			additions: Attribute[];
			properties: Property[];
		}
    export interface Element {
        id: string;
        name: string;
        color: string;
        icon: string;
    }
    export interface Skill {
        id: string;
        name: string;
        level: number;
        max_level: number;
        element: Element;
        type: string;
        type_text: string;
        effect: string;
        effect_text: string;
        simple_desc: string;
        desc: string;
        icon: string;
    }
    export interface SkillTree {
        id: string;
        level: number;
        icon: string;
    }
    export interface LightCone {
        id: string;
        name: string;
        rarity: number;
        rank: number;
        level: number;
        promotion: number;
        icon: string;
        preview: string;
        portrait: string;
        path: AvatarOrPath;
        attributes: (Attributes)[];
        properties: (Property)[];
    }
    export interface Attribute {
        field: string;
        name: string;
        icon: string;
        value: number;
        display: string;
        percent: boolean;
    }
    export interface Relic {
        id: string;
        name: string;
        set_id: string;
        set_name: string;
        rarity: number;
        level: number;
        icon: string;
        main_affix: Property;
        sub_affix: (Property)[];
    }
    export interface RelicSet {
        id: string;
        name: string;
        icon: string;
        num: number;
        desc: string;
        properties: (Property)[];
    }
    export interface Property {
        type: string;
        field: string;
        name: string;
        icon: string;
        value: number;
        display: string;
        percent: boolean;
        count?: number;
        step?: number;
    }
}
