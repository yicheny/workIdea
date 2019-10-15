import {PersonNameList} from "../baseData/BaseData";
import {arrRandom,genRandom,arrCompare} from "../../../utils/publicFun";

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

const existsPersonNameList = [];//已存在的人物，不允许再被生成

export function GenPerson(person={}) {
        const name = person.name || nameFor();
        const sexy = person.sexy || arrRandom(['man','woman']);
        const talent = genRandom(1,100);

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

        function nameFor() {
            if (arrCompare(existsPersonNameList,PersonNameList)) return console.error('人物名称已全部使用完成');//临时，不严谨
            const name = arrRandom(PersonNameList);
            return existsPersonNameList.includes(name) ? nameFor() : name;
        }
}