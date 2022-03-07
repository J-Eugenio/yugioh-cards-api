import {
  Controller,
  Get,
  Param,
  Res,
  Next,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtPublicAuthGuard } from 'src/shared/middleware/auth/auth.public.guard';
import { IFindByIconNameDTO } from '../../dtos/IFindByIconNameDTO';
import { IFindByIdDTO } from '../../dtos/IFindByIdDTO';

@ApiTags('image')
@Controller('image')
@ApiSecurity('access-key')
export class ImageController {
  @UseGuards(JwtPublicAuthGuard)
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

  @UseGuards(JwtPublicAuthGuard)
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

  @UseGuards(JwtPublicAuthGuard)
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

  @UseGuards(JwtPublicAuthGuard)
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
