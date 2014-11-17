package me.slashfix.server.providers;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author burni_000
 */
@Provider
public class CrossOriginResourceSharingFilter implements ContainerResponseFilter {

  @Override
  public void filter(ContainerRequestContext requestContext, ContainerResponseContext response) {
    response.getHeaders().putSingle("Access-Control-Allow-Origin", "*");
    response.getHeaders().putSingle("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.getHeaders().putSingle("Access-Control-Allow-Headers", "content-type");
  }

}
