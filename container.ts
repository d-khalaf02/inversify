import { Container } from 'inversify'
import { IBooking, IPerson, IProperty } from '@fewo-monorepo/entities'
import { BookingBuilder, BookingFaker, PersonFaker, PropertyBuilder, PropertyFaker } from '@fewo-monorepo/utils'
import { TYPES } from './types'


const container = new Container()
container.bind<IPerson>(TYPES.PersonFaker).to(PersonFaker)
container.bind<IProperty>(TYPES.PropertyFaker).to(PropertyFaker)
container.bind<IBooking>(TYPES.BookingFaker).to(BookingFaker)

container.bind<PropertyBuilder>(TYPES.PropertyBuilder).to(PropertyBuilder)
container.bind<BookingBuilder>(TYPES.BookingBuilder).to(BookingBuilder)

export { container }