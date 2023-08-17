import { ResourceOptions } from "adminjs";
import { listenerCount } from "process";

export const categoryResourceOptions: ResourceOptions = {
    navigation: 'Catalogo',
    editProperties: ['name', 'position'],
    filterProperties: ['name', 'position', 'creartedAt', 'updatedAt'],
    listProperties: ['id,', 'name', 'position'],
    showProperties: ['id,', 'name', 'position', 'creartedAt', 'updatedAt']
}