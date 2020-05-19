import { HealthIndicator } from '../HealthIndicator';
import { ResourceHealth } from '../ResourceHealth';
import { getConnection } from 'typeorm';
import { logger } from '../../../utils';

export class CienciaArgentinaConnectionCheck extends HealthIndicator {
  name = 'CienciaArgentina connection';

  async checkHealth(): Promise<void> {
    try {
      const isConnected = getConnection().isConnected;
      if (isConnected) this.status = ResourceHealth.Healthy;
    } catch (error) {
      logger.error({ error, service: this.name, status: ResourceHealth.Unhealthy });
      this.status = ResourceHealth.Unhealthy;
      this.details = error.message;
    }
  }
}
