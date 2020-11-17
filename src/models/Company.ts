import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
class Companies {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    cnpj: string;
}
export default Companies;
