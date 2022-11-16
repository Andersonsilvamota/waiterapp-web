import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '64387dbgfdn5',
    'table': '1223',
    'status': 'WAITTING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '234ghurhekre',
          'price': 40,
        },
        'quantity': 3,
        '_id': 'hruieh323495'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': 'fdsd4f234urhekre',
          'price': 12,
        },
        'quantity': 2,
        '_id': 'fdi3eh323495'
      }
    ]
  }
];

export function Orders(){
  return(
    <Container>
      <OrdersBoard
        icon="🕑"
        title='Fila de espera'
        orders={orders}
      />
      <OrdersBoard icon="👩‍🍳"
        title='Em preparação'
        orders={[]}
      />
      <OrdersBoard icon="✅"
        title='Pronto!'
        orders={[]}
      />
    </Container>
  );
}
