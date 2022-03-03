import {
  Controller,
  Get,
  Param,
  Res,
  Next,
  NotFoundException,
} from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IFindByIconNameDTO } from '../../dtos/IFindByIconNameDTO';
import { IFindByIdDTO } from '../../dtos/IFindByIdDTO';

@ApiTags('image')
@Controller('image')
export class ImageController {
  @ApiResponse({
    description: 'Carta recupera por ID',
    type: Buffer,
  })
  @ApiParam({
    name: 'ID',
    description: 'ID da imagem da carta',
  })
  @Get(':id')
  async getFile(@Param() { id }: IFindByIdDTO, @Res() res, @Next() next) {
    res.sendFile(process.cwd() + `/src/shared/images/${id}.jpg`, (err) => {
      if (err) {
        next(new NotFoundException(`File not found!!`));
      }
    });
  }

  @ApiResponse({
    description: 'Carta recupera por ID',
    type: Buffer,
  })
  @ApiParam({
    name: 'name',
    description: 'Nome do icon',
  })
  @Get('/icons/type/:name')
  async getType(
    @Param() { name }: IFindByIconNameDTO,
    @Res() res,
    @Next() next,
  ) {
    res.sendFile(
      process.cwd() + `/src/shared/icons/types/${name}.png`,
      (err) => {
        if (err) {
          next(new NotFoundException(`File: '${name}' not found!!`));
        }
      },
    );
  }

  @ApiResponse({
    description: 'Carta recupera por ID',
    type: Buffer,
  })
  @ApiParam({
    name: 'name',
    description: 'Nome do icon',
  })
  @Get('/icons/race/:name')
  async getRace(
    @Param() { name }: IFindByIconNameDTO,
    @Res() res,
    @Next() next,
  ) {
    res.sendFile(
      process.cwd() + `/src/shared/icons/races/${name}.png`,
      (err) => {
        if (err) {
          next(new NotFoundException(`File: '${name}' not found!!`));
        }
      },
    );
  }

  @ApiResponse({
    description: 'Carta recupera por ID',
    type: Buffer,
  })
  @ApiParam({
    name: 'name',
    description: 'Nome do icon',
  })
  @Get('/icons/attribute/:name')
  async getAttribute(
    @Param() { name }: IFindByIconNameDTO,
    @Res() res,
    @Next() next,
  ) {
    res.sendFile(
      process.cwd() + `/src/shared/icons/attributes/${name.toUpperCase()}.jpg`,
      (err) => {
        if (err) {
          next(new NotFoundException(`File: '${name}' not found!!`));
        }
      },
    );
  }
}
