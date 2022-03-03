import {
  Controller,
  Get,
  Param,
  Res,
  Next,
  NotFoundException,
} from '@nestjs/common';
import { IFindByIconNameDTO } from '../../dtos/IFindByIconNameDTO';
import { IFindByIdDTO } from '../../dtos/IFindByIdDTO';

@Controller('image')
export class ImageController {
  @Get(':id')
  async getFile(@Param() { id }: IFindByIdDTO, @Res() res, @Next() next) {
    res.sendFile(process.cwd() + `/src/shared/images/${id}.jpg`, (err) => {
      if (err) {
        next(new NotFoundException(`File not found!!`));
      }
    });
  }

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
