import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateITemDto } from './dto/create-item.dto';
import {Request, Response} from 'express';
import {ItemsService} from './items.service';
import { Item} from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor( private readonly itemService: ItemsService) {}

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body () createItemDto: CreateITemDto): Promise<Item> {
        return this.itemService.create(createItemDto);
//        return `Name : ${createItemDto.name} Description : ${createItemDto.description}`;
      }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemService.delete(id);
        //return `Item ${id} deleted`;
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateITemDto, @Param('id') id): Promise<Item>{
        return this.itemService.update(id,updateItemDto);
 //       return `Item ${id} -> Name : ${updateItemDto.name}`;
    }
}
