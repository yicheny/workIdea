import {PersonNameList} from "../baseData/BaseData";
import {arrRandom,genRandom} from "../../../utils/publicFun";

const samplePerson = {
    name:'samplePerson',
    sexy:'man',
    level:5,
    hp:100,
    attack:12,
    defense:6,
    speed:11,
    talent:11,//天赋
    freePoint:89,
};

export function GenPerson() {
        const talent = genRandom(1,100);
        const name = arrRandom(PersonNameList);
        const sexy = arrRandom(['man','woman']);

        return {
            name,
            level:1,
            sexy,
            hp:genRandom(20,100),
            attack:genRandom(0,20),
            defense:genRandom(0,20),
            speed:genRandom(0,20),
            talent,
            freePoint:100-talent,
        };


}