import {
    Entity,
    PrimaryColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import Company from '../../company/entities/company.entity';
import Profile from './profile.entity';
  
  @Entity('Experience')
  export default class Experience {
    @PrimaryGeneratedColumn('uuid')
    experience_id: string;
  
    @ManyToOne(() => Company, (company) => company.experienceofemployee, { nullable: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    company: Company;

    @Column({nullable:true})
    company_name:string

    @Column({nullable:true})
    position:string

    @Column({nullable:true})
    about:string

    @Column({nullable:true})
    certificate_url:string

    @Column("simple-json")
    start_time:{month:string,year:number}

    @Column("simple-json",{default:"Present"})
    end_time:{month:string,year:number}

    @ManyToOne(() => Profile, (profile) => profile.experience, { nullable: false, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    @JoinColumn()
    profile: Profile;
    
  }