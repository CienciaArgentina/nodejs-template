import { transports } from '../utils/logger';
import { Headers, serviceName, CommonPath } from '../commons/constants';
import { Request, Response, Router } from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';

export const handleLogger = (router: Router): void => {
  // Log the whole request and response body
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');

  const formatMessage = 'HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}';

  router.use(
    expressWinston.logger({
      ignoredRoutes: [CommonPath.Health],
      transports: [transports.console],
      format: winston.format.combine(winston.format.timestamp(), winston.format.metadata(), winston.format.json()),
      meta: true,
      baseMeta: { service: serviceName },
      msg: formatMessage,
      dynamicMeta: (req: Request, res: Response) => {
        //TODO: Sacar hardcodeo
        return { 'x-correlation-id': res.getHeader(Headers.CorrelationId) };
      },
    })
  );
};
