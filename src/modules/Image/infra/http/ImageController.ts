import { Controller, Get, Param, Res } from '@nestjs/common';
import { IFindByIdDTO } from '../../dtos/IFindByIdDTO';

@Controller('image')
export class ImageController {
  @Get(':id')
  async getFile(@Param() { id }: IFindByIdDTO, @Res() res) {
    res.sendFile(process.cwd() + `/src/shared/images/${id}.jpg`);
  }
}
