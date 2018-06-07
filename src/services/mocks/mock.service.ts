import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockService implements InMemoryDbService {
  createDb() {
    const users = [
      { username: 'opham', token: 'token_opham' },
      { username: 'randre', token: 'token_randre' },
    ];
    return {users};
  }
}
