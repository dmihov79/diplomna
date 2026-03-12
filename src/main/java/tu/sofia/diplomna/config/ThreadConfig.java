package tu.sofia.diplomna.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.AsyncTaskExecutor;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;

@Configuration
@EnableAsync
public class ThreadConfig {

  @Bean
  public AsyncTaskExecutor asyncTaskExecutor() {
    SimpleAsyncTaskExecutor asyncTaskExecutor = new SimpleAsyncTaskExecutor();
    asyncTaskExecutor.setVirtualThreads(true);
    asyncTaskExecutor.setThreadNamePrefix("diplomna-virtual-thread-");
    asyncTaskExecutor.setTaskTerminationTimeout(5000);
    return asyncTaskExecutor;
  }
}
