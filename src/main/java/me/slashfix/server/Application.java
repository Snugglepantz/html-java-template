package me.slashfix.server;

import java.util.HashSet;
import java.util.Set;
import javax.ws.rs.ApplicationPath;
import org.eclipse.persistence.jaxb.rs.MOXyJsonProvider;

/**
 *
 * @author jhoffma5
 */
@ApplicationPath("/rest")
public class Application extends javax.ws.rs.core.Application {
  final static HashSet<Class<?>> CLASSES  = new HashSet<>(3);
  
  static {
    CLASSES.add(MOXyJsonProvider.class);
  }
  
  public Application() {
  }

  @Override
  public Set<Class<?>> getClasses() {
    return CLASSES;
  }
}
